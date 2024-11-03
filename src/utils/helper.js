const loopData = (user) => {
  const template = [];

  for (const item in user) {
    console.log(item);
    if (item === "avatar") {
      template.push(
        <li href={user[item]} target="_blank">
          {item + ": "} <a href={user[item]} target="_blank">{user[item]}</a>
        </li>
      );
    } else if (item === "user_id") {
      for (const key in user[item]) {
        if (key !== "_id") {
          template.push(<li>{key + ": " + user[item][key]}</li>);
        }
      }
    } else {
      if (item !== "_id") {
        template.push(<li>{item + ": " + user[item]}</li>);
      }
    }
  }

  return template;
};

export { loopData };
