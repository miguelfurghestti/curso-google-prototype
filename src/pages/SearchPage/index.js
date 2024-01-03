import React from "react";
import "./searchpage.css";

import { Link } from "react-router-dom";
import Search from "../../components/Search";

import { useStateValue } from "../../config/StateProvider";
import useGoogleSearch from "../../config/useGoogleSearch";

import {
  MdDescription,
  MdImage,
  MdLocalOffer,
  MdMoreVert,
  MdOutlineSearch,
  MdRoom,
} from "react-icons/md";

function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <Link to="/">
          <img
            className="searchpage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Logo Google"
          />
        </Link>

        <div className="searchpage__headerBody">
          <Search hideButtons />

          <div className="searchpage__options">
            <div className="searchpage__optionLeft">
              <div className="searchpage__option">
                <MdOutlineSearch />
                <Link to="/todos">Todos</Link>
              </div>
              <div className="searchpage__option">
                <MdDescription />
                <Link to="/descricao">Descrição</Link>
              </div>
              <div className="searchpage__option">
                <MdImage />
                <Link to="/imagem">Imagem</Link>
              </div>
              <div className="searchpage__option">
                <MdLocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchpage__option">
                <MdRoom />
                <Link to="/mapa">Mapa</Link>
              </div>
              <div className="searchpage__option">
                <MdMoreVert />
                <Link to="/mais">Mais</Link>
              </div>
            </div>

            <div className="searchpage__optionRight">
              <div className="searchpage__option">
                <Link to="/configuracao">Configuração</Link>
              </div>
              <div className="searchpage__option">
                <Link to="/ferramentas">Ferramentas</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchpage__results">
          <p className="searchpage__resultcount">
            Aproximadamente {data?.searchInformation.formattedTotalResults}{" "}
            resultados ({data?.searchInformation.formattedSearchTime} segundos)
            para {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchpage__result">
              <a
                className="searchpage__resultLink"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0].src && (
                    <img
                      className="searchpage__resultImage"
                      src={item.pagemap?.cse_image[0].src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>

              <a
                className="searchpage__resultTitle"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <h2>{item.title}</h2>
              </a>

              <p className="searchpage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
