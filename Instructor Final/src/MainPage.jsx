import React,{Component} from 'react';
import './App.css';
import StarRatings from 'react-star-ratings';
import { observer,inject } from "mobx-react";

@observer
class MainPage extends Component {
  constructor(props){
    super(props)
    props.store.getApiData();
  }

  computeRating=(InstructorSid)=>{
        var val=0;
        var count=0;
        for(var j=0;j<this.props.store.ratings.length;j++){
          if(InstructorSid === this.props.store.ratings[j].InstructorSid){
            val += this.props.store.ratings[j].Rating;
            count++;
          }
        }
        var rating= val/count;
        rating = !!rating?rating:0;
        return rating;
  }
  
  render(props) {
    return (
        <div>
          {this.props.store.instructors.map((instr, index) => (
          <div className="cnt">
            <h1 className="header">
              RATING CARD
            </h1>
            <div className={"card"}>
                <div className={"divider"}>
                  <section className={"instructorName"}>
                    {instr.Instructor}
                  </section>
                  <section className={"collegeName"}>
                   {!!this.props.store.schools[index] && !!this.props.store.schools[index].Name?this.props.store.schools[index].Name:"No School"}
                  </section>
                  <StarRatings
                    rating={this.computeRating(instr.InstructorSid)}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name='rating'
                  />
                </div>
                <div className={"container"}>
                <div className={"left"}>
                  <button 
                    onClick={()=>{console.log("Liked")}}
                    className={"likeBtn"}>
                      LIKE
                  </button>
                  &nbsp;
                  {this.props.store.likes[index].Likes}
                  </div>
                </div>
            </div>
          </div>
          ))};
        </div>
    );
}
}
export default inject("store")(observer(MainPage));