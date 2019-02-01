const initialState = {
  data : [
    { name: "Layton Syms", email: "lsyms0@si.edu" },
    { name: "Corabelle Dives", email: "cdives1@youku.com" },
    { name: "Matti Crannage", email: "mcrannage2@huffingtonpost.com" },
    { name: "Bryn Wane", email: "bwane3@seattletimes.com" },
    { name: "Ware Maffia", email: "wmaffia4@phoca.cz" },
    { name: "Carlin Hamlington", email: "chamlington5@bbc.co.uk" },
    { name: "Morten Deabill", email: "mdeabill6@techcrunch.com" },
    { name: "Gardiner Bigadike", email: "gbigadike7@newsvine.com" },
    { name: "Angie Brickstock", email: "abrickstock8@webs.com" },
    { name: "Tabbitha Shapiro", email: "tshapiro9@seesaa.net" },
    { name: "Bridie Pavinese", email: "bpavinesea@fastcompany.com" },
    { name: "Karlie Guilloton", email: "kguillotonb@storify.com" },
    { name: "Fae Schumacher", email: "fschumacherc@census.gov" },
    { name: "Merell Hekkert", email: "mhekkertd@storify.com" },
    { name: "Grantham Butcher", email: "gbutchere@ca.gov" },
    { name: "Vidovik Tomkinson", email: "vtomkinsonf@go.com" },
    { name: "Filmer Le Fevre", email: "fleg@amazonaws.com" },
    { name: "Blanch Drayn", email: "bdraynh@t.co" },
    { name: "Garrek Tremoulet", email: "gtremouleti@cbsnews.com" },
    { name: "Mamie Berkery", email: "mberkeryj@aol.com" },
    { name: "Boone Pickton", email: "bpicktonk@businessinsider.com" },
    { name: "Thomasina Arnholtz", email: "tarnholtzl@redcross.org" },
    { name: "Ody Valadez", email: "ovaladezm@networksolutions.com" },
    { name: "Prue Sweating", email: "psweatingn@naver.com" },
    { name: "Marjory Withers", email: "mwitherso@scribd.com" },
    { name: "Janice Rosenvasser", email: "jrosenvasserp@amazonaws.com" },
    { name: "Margie Eagling", email: "meaglingq@skype.com" },
    { name: "Annemarie Greensitt", email: "agreensittr@qq.com" },
    { name: "Jessalin Graben", email: "jgrabens@blog.com" },
    { name: "Melisent Lockton", email: "mlocktont@macromedia.com" }
  ],
  people: [],
  people2:[],
  people3:[],
  people4:[],
  people5:[],
  people6:[],
  firstPair: [],
  secondPair:[],
  currentPairs:[],
  isFetching: false
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_PEOPLE":
      {
        return { ...state, isFetching: true };
      }
      break;
      case "LOAD_PEOPLE":
      {
        return { ...state, people: (action.payload),isFetching: false };
      }

      break;
      case "REMOVE_ADMIN":
      {
        return { ...state, data: (action.payload),isFetching: false };
      }

      break;
      case "ADD_PERSON":
      {;
        return { ...state, data:[...state.data, action.payload],isFetching: false };
      }

      break;
      case "LOAD_PEOPLE2":
      {
        return { ...state, people2: (action.payload),isFetching: false };
      }

      break;
      case "LOAD_PEOPLE3":
      {
        return { ...state, people3: (action.payload),isFetching: false };
      }

      break;
      case "LOAD_PEOPLE4":
      {
        return { ...state, people4: (action.payload),isFetching: false };
      }

      break;
      case "LOAD_PEOPLE5":
      {
        return { ...state, people5: (action.payload),isFetching: false };
      }
      case "LOAD_PEOPLE6":
      {
        return { ...state, people6: (action.payload),isFetching: false };
      }

      break;
      break;
    default: {
      console.log("Unhandled action", action.type);
      return state;
    }
  }
};
