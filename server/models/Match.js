const mongoose = require('mongoose'),
        Schema = mongoose.Schema

const matchSchema = new Schema({
    round: {type: String, required: true},
    isMatchPlayed :{type: Boolean, default: false},
    playerOne: {ref:"Player",type: Schema.Types.ObjectId, required: true},
    playerTwo: {ref:"Player",type: Schema.Types.ObjectId, required: true},
    scored: {type: String, default: ""}
},{
    versionKey :false
})

const Match = mongoose.model('Match', matchSchema);