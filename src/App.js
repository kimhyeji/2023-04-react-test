import { light } from "@mui/material/styles/createPalette";
import classNames from "classnames";
import React, { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
  useParams,
  useNavigate,
} from "react-router-dom";

function HomeMainPage() {
  return <h1>HOME, MAIN</h1>;
}

function HomeAboutPage() {
  return <h1>HOME, ABOUT</h1>;
}

function ArticleListPage() {
  const articles = [{ id: 1 }, { id: 2 }];
  return (
    <>
      <h1>ARTICLE, LIST</h1>{" "}
      <ul>
        {articles.map((article) => (
          <li kye={article.id}>
            <NavLink to={`/article/detail/${article.id}`}>
              {article.id}번 게시물
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

function ArticleDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <h1>ARTICLE, DETAIL</h1>
      <h1>{id}번 게시물 상세 페이지</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <header>
        현재 주소 : {location.pathname}
        <hr />
        <div>
          <NavLink
            to="/home/main"
            className={({ isActive }) =>
              classNames(
                "btn",
                { "btn-link": !isActive },
                { "btn-primary": isActive }
              )
            }
          >
            HOME, MAIN 페이지
          </NavLink>
          <NavLink
            to="/home/about"
            className={({ isActive }) =>
              classNames(
                "btn",
                { "btn-link": !isActive },
                { "btn-primary": isActive }
              )
            }
          >
            HOME, ABOUT 페이지
          </NavLink>
          <NavLink
            to="/article/list"
            className={({ isActive }) =>
              classNames(
                "btn",
                { "btn-link": !isActive },
                { "btn-primary": isActive }
              )
            }
          >
            ARTICLE, LIST 페이지
          </NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/home/main" element={<HomeMainPage />} />
        <Route path="/home/about" element={<HomeAboutPage />} />
        <Route path="/article/list" element={<ArticleListPage />} />
        <Route path="/article/detail/:id" element={<ArticleDetailPage />} />
        <Route path="*" element={<Navigate to="/home/main" />} />
      </Routes>
    </>
  );
}
