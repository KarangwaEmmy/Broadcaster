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
     title: "data.title",
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
     id: newRedFlag.id,
     title: newRedFlag.title,
     type: newRedFlag.type,
     location,
     status,
     images,
     videos,
     comment,
     createdBy,
     isAdmin: newRedFlag.isAdmin,
     created_on: today
    }
 };
 allRedFlags(){
   return this.redFlaglist;
 }
 findOne(id) {
  const oneFlag = this.redFlaglist.find(flag => flag.id === id);
  return oneFlag;
}
deleteredFlag(id){
  const flagArray = this.redFlaglist;
  const flagIndex = flagArray.findIndex(flag => flag.id === id);
  if(flagIndex > -1){
    flagArray.splice(flagIndex, 1);
    return true;
  }
  return false;
}

updateredFlag(flag, id){
  this.redFlaglist.sprice(flag, 1, id)
  return this.redFlaglist;
}
// Update the comment of the redflag and intervention
updateLocation(id, data) {
  const incident = this.findOne(id);
  const index = this.redFlaglist.indexOf(incident);
  this.redFlaglist[index].location = incident.location;
  this.redFlaglist[index].modifiedDate = moment.now()
  return this.redFlaglist[index];
}
}

export default new redFlag();