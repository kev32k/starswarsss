import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const CardPlanet = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="col-4" style={{ display: "inline-block", float: "none" }}>
				<div className="card">
					<img
						src="https://ep01.epimg.net/cultura/imagenes/2020/11/03/1up/1604402433_849755_1604402689_noticia_normal.jpg"
						alt=""
						className="card-img-top"
					/>
					<div className="card-body">
						<h3 className="card-title">{props.planet.name}</h3>
						<p className="card-text">Population: {props.planet.population}</p>
						<p className="card-text">Terrain: {props.planet.terrain}</p>
						<div className="d-flex justify-content-between align-items-center">
							<Link to={`/planets/${props.id}`}>
								<button className="btn btn-info">Learn More!</button>
							</Link>
							<button
								className="btn btn-warning"
								onClick={() => actions.addFavorites(event, props.planet.name)}>
								<i className="far fa-heart text-white" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
CardPlanet.propTypes = {
	planet: PropTypes.object,
	id: PropTypes.number
};
