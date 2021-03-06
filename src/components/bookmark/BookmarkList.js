import React, { useContext } from "react";
import RecipeListItem from "../recipeList/RecipeListItem";
import { BookmarkedRecipesContext } from "../../context/BookmarkedRecipesContext";
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Row, Layout, Typography } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const { Title } = Typography;

const RowWithMargin = styled(Row)`
  margin: 40px;
`;

const BookmarkList = () => {
  const { bookmarkedRecipes } = useContext(BookmarkedRecipesContext);
  const { bookmarkedRecipeObjects } = useContext(BookmarkedRecipesContext);
  const { isLoggedIn } = useContext(UserContext);

  let content = null;

  if (bookmarkedRecipes.length !== 0) {
    content = (
      <Content>
        {bookmarkedRecipeObjects.map((recipe) => (
          <RecipeListItem key={recipe.uri} recipe={recipe} />
        ))}
      </Content>
    );
    //
  } else if (!isLoggedIn) {
    content = (
      <React.Fragment>
        <RowWithMargin justify="center">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            spin
            size="8x"
            style={{ color: "orange" }}
          ></FontAwesomeIcon>
        </RowWithMargin>
        <RowWithMargin justify="center">
          <Title level={4}>
            Please log in first to see your favorite recipes.
          </Title>
        </RowWithMargin>
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <RowWithMargin justify="center">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            spin
            size="8x"
            style={{ color: "orange" }}
          ></FontAwesomeIcon>
        </RowWithMargin>
        <RowWithMargin justify="center">
          <Title level={4}>
            Bookmark a recipe first, as there are no recipes bookmarked.
          </Title>
        </RowWithMargin>
      </React.Fragment>
    );
  }
  return content;
};

export default BookmarkList;
