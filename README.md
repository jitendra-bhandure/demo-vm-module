run: npm install

run test cases:

working     => npx nx test demo-app --testFile=main.spec.ts
not working => npx nx test demo-app --testFile=database.spec.ts

not working => NODE_OPTIONS='--experimental-vm-modules' npx nx test demo-app --testFile=main.spec.ts
not working => NODE_OPTIONS='--experimental-vm-modules' npx nx test demo-app --testFile=database.spec.ts
