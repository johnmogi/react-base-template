export class CommentModel { 
    public constructor(
        public scoreID?: Number,
        public gameID?: Number,
        public teamA?: string,
        public teamB?: string ,       
        public teamAScore?: string, 
        public teamBScore?: string   
        ) {
    } 
}
