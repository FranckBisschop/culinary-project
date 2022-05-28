const theTruth = () => {
    return true
}
// const { newRecipe } = require('./index');

describe('ma première suite de tests', () => {
  test('mon premier test', () => {
    const isTrue = theTruth()
    expect(isTrue).toBe(true)
  })
})

// describe('ma deuxième suite de tests', () => {
//   it('run doit permettre de creer une recette par un utilisateur', () => {
//     //Given
//     const recipe = newRecipe()
//     //When
//     const putRecipe = run(recipe)
//     //Then
//     expect(putRecipe).toBe(newRecipe)
//   })
// })

