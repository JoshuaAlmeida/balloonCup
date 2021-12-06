const mongoose = require('mongoose'),
        Schema = mongoose.Schema

const CompetitionSchema = new Schema({
    titleCompetition: {type: String, required: true},
    startDate: {type: Date, required: true},
    players : [
        {
            ref:"Player",
            type: Schema.Types.ObjectId
        }
    ],
    matches :[
        {
            ref:"Match",
            type: Schema.Types.ObjectId
        }
    ]
},{
    versionKey :false
})

const Competition = mongoose.model('Competition', matchSchema);