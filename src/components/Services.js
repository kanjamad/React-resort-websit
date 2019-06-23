import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
            },
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default  Services;

