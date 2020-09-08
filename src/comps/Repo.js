import React from 'react'
import '../App.css';

const Repo = ({item}) => {

    const date = new Date(item.pushed_at).getTime()
    const now = Date.now();

    const difference = (now - date) / (1000 *60 *60 *60 * 24);

    return (
        <div className="row">
            <img src={item.owner.avatar_url} className="img"/>
            <div className="moreInfo">
                <h2 className="name">{item.name}</h2>
                <p className="description">{item.description}</p>
                <div className="bottomInfo">
                    <p className="infoWithBorder">{item.stargazers_count}</p>
                    <p className="infoWithBorder">{item.open_issues_count}</p>
                    <p>Submitted {Math.floor(difference)} ago by {item.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Repo;