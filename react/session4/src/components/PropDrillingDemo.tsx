interface User {
  name: string
  isAdmin: boolean
}

// Grandchild — actually uses the user
function UserBadge({ user }: { user: User }) {
  return (
    <div>
      <p>Logged in as: {user.name}</p>
      {user.isAdmin && <span>Admin</span>}
    </div>
  )
}

// InternCard receives user only to pass it to UserBadge.
// This is prop drilling because the component does not use the data itself.
function InternCard({ user }: { user: User }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px' }}>
      <p>Intern Card Content</p>
      <UserBadge user={user} />
    </div>
  )
}

// InternList also receives user only to forward it to InternCard.
// If the User interface changes, this component must also be updated
// even though it never uses the user data.
function InternList({ user }: { user: User }) {
  return (
    <div>
      <InternCard user={user} />
      <InternCard user={user} />
    </div>
  )
}

// Top level — owns the user
function PropDrillingDemo() {
  const user: User = {
    name: 'Rahul',
    isAdmin: true,
  }

  return <InternList user={user} />
}

export default PropDrillingDemo