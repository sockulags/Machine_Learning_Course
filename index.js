class User {
    constructor() {
      this.rank = -8
      this.progress = 1
    }
    validRanks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  
    validateRank(rank) {
      return this.validRanks.includes(rank);
    }
  
    calculateProgress(difficulty) {
      const rankIndex = this.validRanks.indexOf(this.rank);
      const difficultyIndex = this.validRanks.indexOf(difficulty);
  
      if (rankIndex === -1 || difficultyIndex === -1) {
        throw new Error("Invalid rank dude");
      }
  
      const difference = difficultyIndex - rankIndex;
  console.log(`rankIndex:${rankIndex}, difficulty: ${difficultyIndex}, difference: ${difference}`)
      if (difference <= -2) {
        return 0;
      } else if (difference === -1) {
        return 1;
      } else if (difference === 0) {
        return 3;
      } else {
        return 10 * difference * difference;
      }
    }
    incProgress(activityDifficulty) {
          const progressGained = this.calculateProgress(activityDifficulty);
      if(this.rank != 8){
          this.progress += progressGained;
      console.log(progressGained)
          while (this.progress >= 100) {
            let oldIndex = this.validRanks.indexOf(this.rank);
          
            if(oldIndex + 1 === this.validRanks.length-1){
              this.progress = 0;
              this.rank = this.validRanks[oldIndex + 1];
            }else{              
                this.rank = this.validRanks[oldIndex + 1];
              this.progress -= 100;
              }
            }
            console.log(`Rank: ${this.rank}, Progress: ${this.progress}`)
          }
      }
     
    }
  
  
  
  
  
  

let user = new User();
user.incProgress(8);
console.log(user.rank);
console.log(user.progress);



