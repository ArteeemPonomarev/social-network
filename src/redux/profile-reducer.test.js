import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    postsData: [{ id: 1, post: 'Hello,everybody', likes: 22 },
        { id: 2, post: 'I am ok', likes: 223 },
        { id: 3, post: 'How are you, my friends?', likes: 132 },
        { id: 4, post: 'I like learn React', likes: 2899 },
        { id: 5, post: 'heeeey', likes: 720 }],
};

it('message of new post should be correct',() => {
    // 1. test data
    let action = addPostActionCreator('It-incubator.com');

    // 2. action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.postsData[5].post).toBe('It-incubator.com')

})

it('length of posts should be increment',() => {
    // 1. test data
    let action = addPostActionCreator('It-incubator.com');

    // 2. action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.postsData.length).toBe(6)
})
