export class CommentModel { 
    public constructor(
        public commentID?: Number,
        public gameID?: Number,
        public name?: string,
        public comment?: string,        
        public commentTime?: string        
        ) {
    } 
}

