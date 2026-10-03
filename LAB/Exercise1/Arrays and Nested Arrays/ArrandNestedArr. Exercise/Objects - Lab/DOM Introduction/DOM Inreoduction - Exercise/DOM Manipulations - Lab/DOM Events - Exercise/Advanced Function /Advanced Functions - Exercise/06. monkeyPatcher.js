function solution(command){
    if(command === 'upvote'){
        this.upvotes += 1;

    }else if(command === 'downvote'){
        this.downvotes += 1;

    }else if(command === 'score'){
        const totalVotes = this.upvotes + this.downvotes;
        const balance = this.upvotes - this.downvotes;
        let rating = 'new';

        if(totalVotes >= 10){
            if(this.upvotes / totalVotes > 0.66){
                rating = 'hot';

            }else if(balance >= 0 && (this.upvotes > 100 || this.downvotes > 100)){
                rating = 'controversial';

            }else if(balance < 0){
                rating = 'unpopular';
            }
        }

        let useUpvote = this.upvotes;
        let useDownvote = this.downvotes;

        if(totalVotes > 50){
            let bonus = Math.ceil(Math.max(useDownvote, useUpvote) * 0.25);

            useUpvote += bonus;
            useDownvote += bonus;
        }

        return [useUpvote, useDownvote, balance, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); 
solution.call(post, 'downvote');         
score = solution.call(post, 'score');     

console.log(score);