const Pet = require('../src/pet');


describe('constructor', () => {
    xit('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    describe('constructor', () => {
      
        xit('sets the name property', () => {
          const pet = new Pet('Fido');
      
          expect(pet.name).toEqual('Fido');
        });
      });
    
      describe('constructor', () => {
      
        xit('has a initial age of 0', () => {
          const pet = new Pet('Fido');
      
          expect(pet.age).toEqual(0);
        });
      });
    
      describe('growUp', () => {
        xit('increments the age by 1', () => {
          const pet = new Pet('Fido');
      
          pet.growUp();
      
          expect(pet.age).toEqual(1);
        
       
        })
        xit('expect hunger to be 0', () => {
            const pet = new Pet('Greg');
            
            expect(pet.hunger).toEqual(0);
        });

        xit('growUp increases hunger by 5', () => {
            const pet = new Pet('Chris');

            pet.growUp();

            expect(pet.hunger).toEqual(5);
        })
       
        xit('expect fitness to be 10', () => {
            const pet = new Pet('Fitty');

            expect(pet.fitness).toEqual(10);

        })

        xit('growUp decreases fitness by 3', () => {
            const pet = new Pet('Wendy');

            pet.growUp();

            expect(pet.fitness).toEqual(7);
        })
      });
     
    
      describe('walk',() => {
         it('increases fitness by 4', () => {
            const pet = new Pet('Fat Pet'); 
            
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toEqual(8);
         })

            it('increases fitness to a maximum of 10', () => {
                const pet = new Pet('Dave');
                pet.fitness = 8;
                pet.walk();
                expect(pet.fitness).toEqual(10);
            })
         })
      
    
  });
  