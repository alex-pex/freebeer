import React from "react";
import { Card, CardTitle, CardText, CardActions, Button, Toolbar, List, ListItem, FontIcon } from "react-md";

import "./App.css";

const beerIcon = <FontIcon iconClassName="fa fa-beer" />;

const App = () =>
  <div className="toolbar-group">
    <Toolbar colored title="Dude, you owe me a beer!" />
    <div className="md-grid">
      <Card className="md-cell">
        <CardTitle title="@alex-pex" />
        <List ordered className="weather-list">
          <ListItem primaryText="Tuesday" leftIcon={beerIcon} />
          <ListItem primaryText="Wednesday" leftIcon={beerIcon} />
          <ListItem primaryText="Thursday" leftIcon={beerIcon} />
        </List>
        <CardActions>
          <Button raised primary label="Je t'en dois une !" />
        </CardActions>
      </Card>

      <Card className="md-cell">
        <CardTitle title="@waelele" />
        <CardText>Aucune bière</CardText>
        <CardActions>
          <Button raised primary label="Je t'en dois une !" />
        </CardActions>
      </Card>
    </div>
  </div>;

export default App;
