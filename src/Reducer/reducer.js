function Choixpeaureducer (state ={selectedHouses: "Serpentard"}, action){
  switch(action.type) {
      case "CHOIXPEAU" :
       return {selectedHouses:  houses[Math.floor(Math.random() * 4)], houses}
      default: 
          return state
  }
}
export default Choixpeaureducer;