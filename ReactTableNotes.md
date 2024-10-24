Basic Table

- Get the data you want to display
- Define thecolumns for your table
- Use the data and column defined to create a table instance using react-table
- Define a basic table structure using plain HTML
- Use the table instance created in step 3 to bring life to th HTML defined in step 4
- Include the desired CSS


- useTable from react-table hook recommends to memorize the rows using useMemo hook
-  useMemo hook ensure that the data isn't recreated on every render, if not memorize columns and data , react table would think it is receiving new data on every render and attempt to recalculate alot of logic every single time.
