const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  if(value == ""){
    delete records[id][prop];

  }else{
    switch (prop){
      case "tracks":
        if(records[id].hasOwnProperty("tracks")){
          records[id][prop].push(value);
        }else{
          records[id][prop] = [];
          records[id][prop].push(value);
        }
        break;
      default:
        records[id][prop] = value;
        break;  
    }
  }  

  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/* 
The id parameter corresponds to a specific album object in the records object.

You need to update this album object based upon the value and prop parameters:

If the value parameter isn’t an empty string, use the value to update the prop property of the album object
If the prop parameter is "tracks", push the value onto the end of the tracks array of the album object.
If the prop parameter is not "tracks", set the value of the prop property of the album object.
If value parameter is an empty string, delete the prop from the album object.
Finally, the problem wants you to return the records object.
*/
