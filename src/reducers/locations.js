export default function counter(
  state = {
    1: {
      title: "Brewd",
      description: "sick brews m8",
      rating: 3
    },
    2: {
      title: "Terra Gia",
      description: "Both a plant shoppe and a coffee shoppe",
      rating: 4
    },
    3: {
      title: "Marginson's Loo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. yo dawg",
      rating: 5,
      badges: [{imgSrc: "/img/t.jpg", name: "Terrible" }, {imgSrc: "/img/goodnews.png", name: "Good News"}]
    }
  },
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
