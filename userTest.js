onst { default: expect } = require('expect');
const { getUser, getUsers } = require('../users');

const users = [
  {
    id: 1,
    username: "hpLover4",
    email: "sirious90@gmail.com",
    password: "hArrydotCom"
  },
  {
    id: 2,
    username: "piderman",
    email: "parkerdapete@gmail.com",
    password: "2D$aLzX9(_2"
  },
  {
    id: 3,
    username: "goosemotionless",
    email: "dotmeheart@outlook.com",
    password: "12345abcde"
  },
  {
    id: 4,
    username: "unsurejudy",
    email: "babariley77@gmail.com",
    password: "Kashmir1970"
  }
];

describe('getUser', () => {
  it('returns the user with the given id', () => {
    expect(getUser(users, 1)).toEqual({
      id: 1,
      username: "hpLover4",
      email: "sirious90@gmail.com",
      password: "hArrydotCom"
    });
    expect(getUser(users, 3)).toEqual({
      id: 3,
      username: "goosemotionless",
      email: "dotmeheart@outlook.com",
      password: "12345abcde"
    });
  });

  it('returns undefined if the user is not found', () => {
    expect(getUser(users, 5)).toBeUndefined();
  });
});

describe('getUsers', () => {
  it('returns all users', () => {
    expect(getUsers(users)).toEqual([
      {
        id: 1,
        username: "hpLover4",
        email: "sirious90@gmail.com",
        password: "hArrydotCom"
      },
      {
        id: 2,
        username: "piderman",
        email: "parkerdapete@gmail.com",
        password: "2D$aLzX9(_2"
      },
      {
        id: 3,
        username: "goosemotionless",
        email: "dotmeheart@outlook.com",
        password: "12345abcde"
      },
      {
        id: 4,
        username: "unsurejudy",
        email: "babariley77@gmail.com",
        password: "Kashmir1970"
      }
    ]);
  });
});