var apiKey = config.MY_KEY;
var apiSecret = config.SECRET_KEY;
const competitionId = "387";
const url = `https://livescore-api.com/api-client/fixtures/matches.json?key=${apiKey}&secret=${apiSecret}&competition_id=${competitionId}`;

// Games
const translations = {
  Germany: { name: "גרמניה", flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg", teamId: 1449, groupId: 2762 },
  Hungary: { name: "הונגריה", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg", teamId: 1475, groupId: 2762 },
  Scotland: { name: "סקוטלנד", flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg", teamId: 1741, groupId: 2762 },
  Switzerland: { name: "שווייץ", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg", teamId: 208, groupId: 2762 },
  Spain: { name: "ספרד", flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg", teamId: 1438, groupId: 2763 },
  Italy: { name: "איטליה", flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg", teamId: 1740, groupId: 2763 },
  Croatia: { name: "קרואטיה", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg", teamId: 211, groupId: 2763 },
  Albania: { name: "אלבניה", flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg", teamId: 1742, groupId: 2763 },
  Slovenia: { name: "סלובניה", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg", teamId: 1648, groupId: 2764 },
  Denmark: { name: "דנמרק", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg", teamId: 1442, groupId: 2764 },
  Serbia: { name: "סרביה", flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg", teamId: 1447, groupId: 2764 },
  England: { name: "אנגליה", flag: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg", teamId: 1456, groupId: 2764 },
  Netherlands: { name: "הולנד", flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg", teamId: 1649, groupId: 2765 },
  Poland: { name: "פולין", flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg", teamId: 1459, groupId: 2765 },
  France: { name: "צרפת", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg", teamId: 1439, groupId: 2765 },
  Austria: { name: "אוסטריה", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg", teamId: 2684, groupId: 2765 },
  Slovakia: { name: "סלובקיה", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg", teamId: 1619, groupId: 2766 },
  Belgium: { name: "בלגיה", flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg", teamId: 1453, groupId: 2766 },
  Romania: { name: "רומניה", flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg", teamId: 1743, groupId: 2766 },
  Ukraine: { name: "אוקראינה", flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg", teamId: 1618, groupId: 2766 },
  Turkey: { name: "טורקיה", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg", teamId: 1744, groupId: 2767 },
  Georgia: { name: "גאורגיה", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg", teamId: 2682, groupId: 2767 },
  Portugal: { name: "פורטוגל", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg", teamId: 1437, groupId: 2767 },
  "Czech Republic": { name: "צ׳כיה", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg", teamId: 1722, groupId: 2767 },
  "Runner-up Group A": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Runner-up Group B": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Runner-up Group C": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Runner-up Group D": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Runner-up Group E": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Runner-up Group F": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner Group A": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner Group B": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner Group C": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner Group D": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner Group E": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner Group F": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "3rd Group D/E/F": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "3rd Group A/D/E/F": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "3rd Group D/E/F": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "3rd Group A/B/C": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "3rd Group A/B/C/D": { name: "שמינית גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner R16 Match 1": { name: "רבע גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner R16 Match 2": { name: "רבע גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner R16 Match 3": { name: "רבע גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner R16 Match 4": { name: "רבע גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner R16 Match 5": { name: "רבע גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner R16 Match 6": { name: "רבע גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner R16 Match 7": { name: "רבע גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner R16 Match 8": { name: "רבע גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner QF Match 1": { name: "חצי גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner QF Match 2": { name: "חצי גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner QF Match 3": { name: "חצי גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner QF Match 4": { name: "חצי גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner SF1": { name: "גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
  "Winner SF2": { name: "גמר", flag: "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/665f5324ce1e3c5cf3fb2049_fav.png" },
};

const showGames = [
  { date: "15/06", time: "19:00", type: "f" },
  { date: "20/06", time: "22:00", type: "p" },
  { date: "21/06", time: "22:00", type: "p" },
  { date: "22/06", time: "22:00", type: "p" },
  { date: "24/06", time: "22:00", type: "p" },
  { date: "05/07", time: "19:00", type: "p" },
  { date: "05/07", time: "22:00", type: "p" },
  { date: "06/07", time: "19:00", type: "p" },
  { date: "06/07", time: "22:00", type: "p" },
  { date: "09/07", time: "22:00", type: "p" },
  { date: "10/07", time: "22:00", type: "p" },
  { date: "14/07", time: "22:00", type: "p" },
];

const fetchData = async (url, allFixtures = [], callback) => {
  const response = await fetch(url);
  const data = await response.json();
  const updatedFixtures = [...allFixtures, ...data.data.fixtures];
  const nextPageUrl = data.data.next_page;

  if (nextPageUrl) {
    await fetchData(nextPageUrl, updatedFixtures, callback);
  } else {
    await populateTable(updatedFixtures);
    if (callback) {
      callback(updatedFixtures);
    }
    return updatedFixtures;
  }
};

const translateTeamName = (teamName) => {
  return translations[teamName] || { name: teamName, flag: "" };
};

const addThreeHours = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  let newHour = hour + 3;
  let newDay = 0;
  if (newHour >= 24) {
    newHour -= 24;
    newDay = 1;
  }
  return { newHour, minute, newDay };
};

const formatTime = (time) => {
  const { newHour, minute } = addThreeHours(time);
  return `${newHour}:${minute.toString().padStart(2, "0")}`;
};

const formatDate = (date, time) => {
  const { newDay } = addThreeHours(time);
  const [year, month, day] = date.split("-").map(Number);
  const adjustedDay = day + newDay;
  return `${adjustedDay.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}`;
};

const isScreenedGame = (date, time) => {
  return showGames.some((game) => game.date === date && game.time === time);
};

const getTickerImageUrl = (date, time) => {
  const game = showGames.find((game) => game.date === date && game.time === time);
  if (game) {
    if (game.type === "p") {
      return "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/66604ba66a25e6e378213f04_p.svg";
    } else if (game.type === "f") {
      return "https://uploads-ssl.webflow.com/65ce061ab0b735d2de99eb54/66604ce79d05d05192d7cea1_g.png";
    }
  }
  return null;
};

const fetchLiveScore = async (fixtureId) => {
  const liveScoreUrl = `https://livescore-api.com/api-client/matches/live.json?&key=bh5CasuyOEq3eQV1&secret=LWSKc2jVjLJ51Kdc2iPcLjKAYbDd1yeM&fixture_id=${fixtureId}`;
  try {
    const response = await fetch(liveScoreUrl);
    const data = await response.json();
    if (data.data && data.data.match && data.data.match.live) {
      const liveScore = data.data.match.live;
      return `${liveScore.home_name} ${liveScore.score} ${liveScore.away_name}`;
    } else {
      return "0:0";
    }
  } catch (error) {
    console.error(`Error fetching live score for fixture ID: ${fixtureId}`, error);
    return "Error fetching live score";
  }
};

const populateTable = async (fixtures) => {
  // Sort fixtures by date and time in ascending order
  fixtures.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    // Dates are the same, compare times
    const timeA = a.time.split(":").map(Number);
    const timeB = b.time.split(":").map(Number);
    if (timeA[0] < timeB[0]) return -1;
    if (timeA[0] > timeB[0]) return 1;
    if (timeA[1] < timeB[1]) return -1;
    if (timeA[1] > timeB[1]) return 1;
    return 0;
  });

  const table = document.getElementById("table").getElementsByTagName("tbody")[0];
  for (const fixture of fixtures) {
    const homeTranslation = translateTeamName(fixture.home_name);
    const awayTranslation = translateTeamName(fixture.away_name);
    const formattedTime = formatTime(fixture.time);
    const formattedDate = formatDate(fixture.date, fixture.time);

    // Create google calendar date
    const dateTimeString = fixture.date.concat(" ", fixture.time);
    const calDate = (dateTimeString) => {
      const pad = (num) => (num < 10 ? "0" + num : num);
      const date = new Date(dateTimeString);
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());

      return `${year}${month}${day}T${hours}${minutes}00Z`;
    };
    // End date
    const calEndDate = (dateTimeString, durationHours) => {
      const date = new Date(dateTimeString);
      date.setHours(date.getHours() + durationHours);
      return calDate(date);
    };

    const linkDate = calDate(dateTimeString);
    const linkEndDate = calEndDate(dateTimeString, 2);

    let newRow = table.insertRow();
    newRow.id = fixture.id;
    newRow.insertCell(0).innerHTML = `<a class="cal-link" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Euro+2024++-++${fixture.home_name}+Vs.+${fixture.away_name}&dates=${linkDate}/${linkEndDate}&details=הקרנת+משחקי+היורו+על+מסך+ענק+במושב+שילת"></a>`;
    newRow.insertCell(1).innerText = formattedDate;
    newRow.insertCell(2).innerText = formattedTime;
    newRow.insertCell(3).innerHTML = `<img src="${homeTranslation.flag}" class="flag"> ${homeTranslation.name}`;
    newRow.insertCell(4).innerHTML = `<img src="${awayTranslation.flag}" class="flag"> ${awayTranslation.name}`;

    // Insert cell for live score and fetch live score
    const liveScoreCell = newRow.insertCell(5);
    liveScoreCell.innerHTML = "<div class='cell-flex'>0:0</div>";
    fetchLiveScore(fixture.id).then((liveScore) => {
      liveScoreCell.innerHTML = `<div class='cell-flex'>${liveScore}</div>`;
    });

    let tickerCell = newRow.insertCell(6);
    const tickerImageUrl = getTickerImageUrl(formattedDate, formattedTime);
    if (tickerImageUrl) {
      tickerCell.innerHTML = `<div class="cell-flex"><img src="${tickerImageUrl}" class="loc-icon"></div>`;
    }

    if (!isScreenedGame(formattedDate, formattedTime)) {
      let checkboxCell = newRow.insertCell(7);
      checkboxCell.innerHTML = `<div class="cell-flex"><input type="checkbox" name="${fixture.id}"/></div>`;
    } else {
      newRow.insertCell(7);
    }

    newRow.insertCell(8);
  }

  // Add event listeners for checkboxes
  addCheckboxListeners();
};

// Add checkbox listeners
const addCheckboxListeners = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const idString = document.getElementById("idString");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedIds = Array.from(checkboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.name)
        .join(",");

      idString.value = selectedIds;
    });
  });
};

// Groups
const groupIds = ["2762", "2763", "2764", "2765", "2766", "2767"];

const fetchGroupData = async (groupId, retries = 3) => {
  const url = `https://livescore-api.com/api-client/groups/table.json?key=${apiKey}&secret=${apiSecret}&group_id=${groupId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.data && data.data.group && data.data.group.standings) {
      return data.data.group.standings;
    } else {
      console.error(`No standings found for group ID: ${groupId}`, url);
      return [];
    }
  } catch (error) {
    if (retries > 0) {
      console.error(`Error fetching data for group ID: ${groupId}. Retries left: ${retries}`, error);
      return await fetchGroupData(groupId, retries - 1);
    } else {
      console.error(`Failed to fetch data for group ID: ${groupId} after multiple attempts`, error);
      return [];
    }
  }
};

const populateGroupTable = (groupId, groupData) => {
  const table = document.getElementById(`${groupId}`).getElementsByTagName("tbody")[0];
  groupData.forEach((team) => {
    const translatedTeam = translations[team.team.name] || { name: team.team.name, flag: team.team.logo };
    let newRow = table.insertRow();
    newRow.insertCell(0).innerText = team.rank;
    newRow.insertCell(1).innerHTML = `<img class="flag" src="${translatedTeam.flag}" alt="${team.team.name}">` + " " + translatedTeam.name;
    newRow.insertCell(2).innerText = team.matches;
    newRow.insertCell(3).innerText = team.won;
    newRow.insertCell(4).innerText = team.drawn;
    newRow.insertCell(5).innerText = team.lost;
    newRow.insertCell(6).innerText = team.goals_scored;
    newRow.insertCell(7).innerText = team.goals_conceded;
    newRow.insertCell(8).innerText = team.goal_diff;
    newRow.insertCell(9).innerText = team.points;
  });
};

const fetchAllGroups = async () => {
  for (const groupId of groupIds) {
    try {
      const groupData = await fetchGroupData(groupId);
      populateGroupTable(groupId, groupData);
    } catch (error) {
      console.error(`Failed to fetch or populate group table for group ID: ${groupId}`, error);
    }
  }
};

// All games presented callback
const onFetchDataComplete = (fixtures) => {
  // Get votes
  const votesList = document.getElementById("votesList");
  const voteItems = votesList.children;

  Array.from(voteItems).forEach((voteItem) => {
    const gameId = voteItem.getAttribute("data-game");
    const votes = voteItem.getAttribute("votes");
    const tableRow = document.querySelector(`#table tr[id="${gameId}"]`);

    if (tableRow) {
      const targetCell = tableRow.cells[8];
      targetCell.innerHTML = `<div class="vote-num">${votes}</div>`;
    }
  });

  // Find next game
  function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}`;
  }

  function findNextClosestDate(elements) {
    const today = new Date();
    let closestDate = null;
    let closestElement = null;

    elements.forEach((element) => {
      const dateParts = element.innerHTML.split("/");
      const elementDate = new Date(today.getFullYear(), dateParts[1] - 1, dateParts[0]);

      if (elementDate >= today && (!closestDate || elementDate < closestDate)) {
        closestDate = elementDate;
        closestElement = element;
      }
    });
    return closestElement;
  }

  const elements = document.querySelectorAll("#table td");
  const nextClosestElement = findNextClosestDate(Array.from(elements));

  if (nextClosestElement) {
    nextClosestElement.parentElement.classList.add("next");
  } else {
    console.log("No future dates found.");
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  fetchAllGroups();
  fetchData(url, [], onFetchDataComplete);

  // User checks checkbox
  const table = document.getElementById("table");
  const formWrap = document.getElementById("formWrap");

  table.addEventListener("change", function () {
    const checkboxes = table.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;

    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        isChecked = true;
      }
    });

    if (isChecked) {
      formWrap.classList.add("show");
    } else {
      formWrap.classList.remove("show");
    }
  });
});
