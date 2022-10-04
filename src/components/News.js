import React,{useEffect,useState} from 'react';

import Spinner from './Spinner';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News= (props)=>  {
 const  [articles,setArticles] = useState([]);
 const  [loading,setLoading] = useState(true);
 const  [page,setPage] = useState(1);
 const  [totalResults,setTotalResults] = useState(0);

  

 
    const capitalizefirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    const updateNews=async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7726136795ee4a0e9a12ad9896242351&page=${page}&pageSize=${props.pageSize}`
       setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(50);
        //console.log(parseData);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
       
        props.setProgress(100);
    }

    useEffect ( ()=>{
        updateNews();
        document.title = `${capitalizefirstLetter(props.category)}- NewsMonkey`;
        //aslil disable line
    },[])
    //

    const fetchMoreData =async ()=>
    {
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7726136795ee4a0e9a12ad9896242351&page=${page+1}&pageSize=${props.pageSize}`
      //  setState({ loading: true });
      setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
      
    }

   
        
        return (
            <>
                <h1 className="text-center" style={{ margin: '40px 0px',marginTop: '80px'}}>NewsMonkey - Top {capitalizefirstLetter(props.category)} Headlines</h1>
                 {loading && <Spinner />}       

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length!==totalResults}
                    loader={<Spinner/>}
                >
                    
               <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>

                    })}
              
              </div>
                </div>
                </InfiniteScroll>
             
            </>
          
        )
    }



News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News
