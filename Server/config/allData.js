
const today = new Date().toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

const allData = {
  userData: [
        
    {
        id: 1, //
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6ImVmNjhkNjg2LTJkYjktNDgxNi05NDRmLWEyYTI4OGQ0NjI1NCIsImlhdCI6MTU2OTcyMDY0MCwiZXhwIjoxNTY5ODA3MDQwfQ.7LcCFd8zpSl1-FgEoAmDKid-AHs5Dm-NRJmkbN5XonM",
       "firstname": '\'Emmy \'', 
       "firstname": '\'Karangwa\'',  
       "email​": '\'karangwae@gmail.com\'',
       "phoneNumber": '\'(+250) 786639530\'',
       "username": '\'Kemmy\'',
       "password": '\'karagwa\'',
       "Creatred_on":today
     },
     {
       id: 2, //
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6ImVmNjhkNjg2LTJkYjktNDgxNi05NDRmLWEyYTI4OGQ0NjI1NCIsImlhdCI6MTU2OTcyMDY0MCwiZXhwIjoxNTY5ODA3MDQwfQ.7LcCFd8zpSl1-FgEoAmDKid-AHs5Dm-NRJmkbN5XonM",
       "firstname": '\'Emily \'', 
       "firstname": '\'Mutaga\'',  
       "email​": '\'kosha@gmail.com\'',
       "phoneNumber": '\'(+250) 785042259\'',
       "username": '\'Kosha\'',
       "password": '\'margret\'',
       "Creatred_on":today
     }
    ],
    redFlag: [
      {
        id: 1,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6ImVmNjhkNjg2LTJkYjktNDgxNi05NDRmLWEyYTI4OGQ0NjI1NCIsImlhdCI6MTU2OTcyMDY0MCwiZXhwIjoxNTY5ODA3MDQwfQ.7LcCFd8zpSl1-FgEoAmDKid-AHs5Dm-NRJmkbN5XonM",
       "createdOn": today, 
       "createdBy": '\'Kosha\'',  
       "title": '\'Effect of the robotics\'',
       "type": '\'red flag\'',
       "location": '\'Kigali\'',
       "status": '\'draft\'',
       "images":'http://images/rwanda/profile.jpg',
       "videos": '\'http://vodeos/rwanda/profile.mp4\'',
       "comment": '\'It has been a long time without resting\'',
      },
      {
        id: 2,
        "createdOn": today, 
        "createdBy": '\'Kemmy\'',  
        "title": '\'Flood assistance\'',
        "type": '\'Intervation\'',
        "location": '\'Kigali\'',
        "status": '\'Under Investigation\'',
        "images":'http://images/rwanda/profile.jpg',
        "videos": '\'http://vodeos/rwanda/profile.mp4\'',
        "comment": '\'It has been a long time without resting\'',
      }
    ],
    Intervation: [
      {
        id: 1,
        "createdOn": today, 
        "createdBy": '\'Ruth\'',  
        "title": '\'Repairing of the road\'',
        "type": '\'red flag\'',
        "location": '\'Kigali\'',
        "status": '\'solved\'',
        "images":'http://images/rwanda/profile.jpg',
        "videos": '\'http://vodeos/rwanda/profile.mp4\'',
        "comment": '\'It has been a long time without resting\'',
      },
      {
        id: 2,
        "createdOn": today, 
        "createdBy": '\'Kayitesi\'',  
        "title": '\'Construction of the bridge\'',
        "type": '\'red flag\'',
        "location": '\'Kigali\'',
        "status": '\'Rejected\'',
        "images":'http://images/rwanda/profile.jpg',
        "videos": '\'http://vodeos/rwanda/profile.mp4\'',
        "comment": '\'It has been a long time without resting\'',
      }
    ]
 
 
}

export default allData;