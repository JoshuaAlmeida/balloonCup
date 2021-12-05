const mongoose = require('mongoose'),
        Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {type: String, required: true},
    country : {type: String, required: true},
    speed : {type: Number, required: true},
    strength : {type: Number, required: true}
}, {
    versionKey :false
})

playerSchema.methods.distanceHitBalloon = async () => {
    try {
        return Player.strength * Math.random() 
    } catch (error) {
        throw error
    }
}

playerSchema.methods.successHitBalloon = async (distanceBalloon) => {
    try {
        return distanceBalloon < Player.speed * Math.random() 
    } catch (error) {
        
    }
}

const Player = mongoose.model('Player', playerSchema);