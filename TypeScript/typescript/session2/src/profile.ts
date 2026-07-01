interface Profile {
  displayName: string;
  bio?: string;
  website?: string;
  avatarUrl?: string;
}

function renderProfile(profile: Profile): string {

  let output = `Name: ${profile.displayName}\n`;

  output += `Bio: ${profile.bio ?? "No bio provided"}\n`;

  if (profile.website) {
    output += `Website: ${profile.website}\n`;
  }

  return output;
}

const fullProfile: Profile = {
  displayName: "Alice",
  bio: "Frontend Developer",
  website: "https://alice.dev",
  avatarUrl: "avatar.jpg"
};

const basicProfile: Profile = {
  displayName: "Bob"
};

//console.log(basicProfile.bio.toUpperCase());  'basicProfile.bio' is possibly 'undefined'.
console.log(renderProfile(fullProfile));
console.log(renderProfile(basicProfile));

/*
If I try to call profile.bio.toUpperCase() directly,
TypeScript gives an error because bio is optional and may be undefined.

Since undefined does not have a toUpperCase() method,
TypeScript requires a check before using it to prevent runtime errors.
*/