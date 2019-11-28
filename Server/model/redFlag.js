import moment from 'moment';
import allData from '../config/allData';

const today = new Date().toLocaleDateString(undefined, {
 day: 'numeric',
 month: 'short',
 year: 'numeric',
 hour: '2-digit',
 minute: '2-digit'
})

class redFlag{

 constructor(){
   this.redFlaglist = allData.redFlag;
 }

 postRedFlag(data){
   const redId = this.redFlaglist.length + 1;
    const {title, type, location, status, images, videos, comment, createdBy ,isAdmin} = data;

   const newRedFlag = {
     id: redId,
     title: data.title,
     type: data.type,
     location: data.location,
     status: data.status,
     images: data.images,
     videos: data.videos,
     comment: data.comment,
     createdBy: data.createdBy,
     isAdmin: 'false',
     created_on: today
   }

    this.redFlaglist.push(newRedFlag);

    return {
     newRedFlag
    }
 };
 allRedFlags(){
   return this.redFlaglist;
 }
 
}

export default new redFlag();