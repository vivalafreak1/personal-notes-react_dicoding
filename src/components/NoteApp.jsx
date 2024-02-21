import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";

import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

function NoteApp() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <a href="/">Aplikasi Catatan</a>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/add" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
