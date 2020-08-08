import React, { Component } from "react";
import "./layout.css";
import { GameModel } from "../../models/Game-model";

interface gamesState {
    games: GameModel[];
   
}

export class Layout extends Component {
    public constructor(props: any) {
        super(props);
        this.state = {
            games: []
        };
    }

    public componentDidMount(): void {
        fetch("http://localhost:3000/api/games")
            .then(
                response => response.json()
            )
            .then(
                response => console.log(response)
            )

            .then(games => this.setState({ games }))
            .catch(err => alert(err.message));
    }

    public render(): JSX.Element {

        return (
            <div className="container">
     
                <section className="main">
{/* <h3> we have {this.state.games.length}</h3> */}

                </section>
                <hr />
                <footer>
                    All rights reserverd &copy; Johnmogi 
                </footer>



            </div>
        );
    }
}