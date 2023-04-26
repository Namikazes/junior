import profileReduce, { addPostActionCreate, deletingPost,} from "./profile-reduce";

let state = {
    posts: [
        { id: 1, text: 'Its my first post', likeCount: 23 },
        { id: 2, text: 'How are you?', likeCount: 13 },
        { id: 3, text: 'How are you?', likeCount: 13 },
        { id: 4, text: 'FUCH STATE?', likeCount: 13 },
        { id: 5, text: 'How are you?', likeCount: 13 },
        { id: 6, text: 'Oh, shit?', likeCount: 13 },
    ]
}

it('add new post', () => {
    let action = addPostActionCreate("it-kamasutra");
    let newState = profileReduce(state, action);
    expect(newState.posts.length).toBe(7);
});

it('add new post', () => {
    let action = addPostActionCreate("it-kamasutra");
    let newState = profileReduce(state, action);
    expect(newState.posts[6].text).toBe('it-kamasutra')
});

it('deliting length after shoud dicrement',() => {
    let action = deletingPost(1);
    let newState = profileReduce(state, action);
    expect(newState.posts.length).toBe(5);
})
