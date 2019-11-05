import {observable,runInAction,action } from "mobx";
import Actions from "../action";

class UiStore {
  @observable instructors = [];
  @observable likes = [];
  @observable ratings = [];
  @observable schools = [];
  
  @action
  getApiData= async () => {
    try {
        const data = await Actions()    
        
        runInAction(() => {
          this.instructors.replace(data.Ratings.Instructors);
          this.likes.replace(data.Ratings.Likes);

          this.schools.replace(data.Ratings.Schools);
      
          this.ratings.replace(data.Ratings.Ratings);
  
      });


    } catch (error) {
       console.log(error)
    }
};

}
var store = window.store=new UiStore();
export default store;