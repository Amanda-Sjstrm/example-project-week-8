/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header';
import { List } from 'components/List';
import { Details } from 'components/Details';
import { NotFound } from 'components/NotFound';

export const App = () => {
  const [list, setList] = useState([]); // state variable
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => {
        setList(data.results);
      })
      .catch((e) => {
        console.error(console.error(e));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* 1st <Route> should have the path set to '/' and the element to '<List>' with the prop 'pokemons' set to 'list' */}
        <Route path="/" element={<List pokemons={list} />} />
        <Route path="/details/:pokemonName" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        {/* 4th <Route> should have the path set to '*' and the element to '<Navigate>' with the prop 'to' set to '/404' and with the prop 'replace' */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
