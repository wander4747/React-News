import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';

const Home = ({ match }) => {

    const [data, setDate] = useState([]);

    useEffect (() => {
        let category = '';

        if (match.params.category){
            category = match.params.category
        }
        axios
            .get('https://newsapi.org/v2/top-headlines?country=br&apiKey=2547f70fee3c4b0d9019f7cfe0a93627&pagSize=30&category='+category)
            .then(res => {
                setDate(res.data.articles)
            },[])
            .catch(function (error) {
                console.log(error);
            })
    },[setDate, match]);


    const renderPost = record => {
        return(
            <Col xs="6" key={record.title} className="mt-3 p-3">
                <div className="App-img-fixed">
                    <img src={record.urlToImage} className="img-fluid" />
                </div>
                
                <h2 className="App-title">{record.title}</h2>

                {record.author !==null &&
                    <h3 className="App-author">Autor: {record.author}</h3>
                }
                
                <p className="App-description">{record.description}</p>
                <a href={record.url} target="_blank">Ver notícia</a>
            </Col>
        );
    }

    return(
        <Container>
            <Row>
                {data.map(renderPost)}
            </Row>
        </Container>
    )
}

export default Home