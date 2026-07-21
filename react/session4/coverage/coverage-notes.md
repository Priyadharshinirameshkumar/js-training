/*
Task 5.1

Coverage Results

Statements : 88.29%
Branches   : 72.88%
Functions  : 84.44%
Lines       : 90.47%

The lowest coverage metric is Branch Coverage (72.88%).
Branch coverage is usually the lowest because every possible
decision path (if/else, switch, ternary, etc.) must be tested.
*/

/*
Task 5.2

File with partial branch coverage:
intern-context.tsx

Untested branch:
The branch where useInterns() is called outside the InternProvider.

Condition:
if (!context)

Input that triggers the branch:
Render a component that calls useInterns() without wrapping it inside
<InternProvider>. This causes the hook to throw the expected error.
*/





/*
Task 5.4

The test increased code coverage because it executed additional code.

However, it did not improve test quality because it did not verify
any real behavior.

The test could not catch a bug since the assertion always passes.

This demonstrates that high coverage alone does not guarantee
good or meaningful tests.
*/