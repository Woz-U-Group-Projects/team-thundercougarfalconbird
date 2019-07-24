Install Dependencies (Express)
    npm install
Recreate the Database
    sequelize db:migrate
Seed the Database
    sequelize db:seed:all
Install Dependencies (Angular)
    cd client
    npm install
To Run Application
    Open Command Prompt
    Navigate to Project Folder
    Run Command
        nodemon
    Open VS Code
    cd client
    ng serve --open
    
Team: ThunderCougarFlaconBird

App Name: SaleBev

GitHub: https://github.com/Woz-U-Group-Projects/team-thundercougarfalconbird.git

Minimum Requirements:

    1.	Front End – Angular
    2.	Back End – Node + Express
    3.	Database – MySQL
    4.	Style – CSS
    5.	Responsive
    
Beverage Sales App Pages:

User Experience:

    1.	User Registration – Allows the user to create a unique id that is linked to only them.
        a.	First and Last Name
        b.	Create a unique username
        c.	Input a unique email address
        d.	Create a Password
    2.	Sign in – Allows the user to login and view and edit profile, see history, and check out.
        a.	Input Username
        b.	Input Password
    3.	Profile user’s – A page that shows the users provided information as well as recent activity.
        a.	Name
        b.	User Name – Unique to each user.
        c.	User Image
        d.	Email
        e.	Recent Orders (last order)
        f.	Recent Ratings (last rating given)
    4.	Search – Allows the user to search the database of beverages using keywords and other attributes of database 
        a.	Heading: Input search
        b.	Heading: Dropdown menu with Keywords
            i.	Ratings (will be out of 5 stars, and average together each rating added to the selected item)
            ii.	Department (will be separated by alcohol percentage)
                1.	Beer
                2.	Wine
                3.	Liquor
                4.	Non-Alcoholic
        c.	Sortable list of items returned
            i.	Department
            ii.	Style – Will be determined by Admin inputs
    5.	Item Page
        a.	Department
        b.	Style
        c.	Item Name
        d.	Item Picture
        e.	Rating (out of 5 stars)
        f.	Price
        g.	Description
        h.	Quantity to order – Selectable by user
        i.	Buy Now Button – will submit the quantity on order to the Shopping Cart page
        j.	Add to Wishlist
    6.	Shopping Cart page
        a.	Selected Items
            i.	Quantity on order
            ii.	Price
        b.	Total 
        c.	Confirm Button – A submit button which will take a user to the Completed order page. 
    7.	Completed order page - Will show a thank you message for the order.
    8.	History – Will show all past orders in descending order by date.
        a.	Filter for input keyword search
        b.	Give Rating (out of 5 stars)
    9.	Wishlist
        a.	Shows all items added in descending recent order
    10.	Contact Us
        a.	Issue Ticket – Allows user to rescind an order or if a problem occurs with the website.
        
Admin:

    1.	View All Users – By Customer Id in numerical order
    2.	View All Tickets
    3.	Respond to Tickets 
    4.	Edit any allowed information
    5.	Input Inventory
        a.	Item
        b.	Description
        c.	Price
        d.	Department
        e.	Style
    6.	Mark orders
        a.	Received
        b.	Completed
        c.	Paid
        
Stretch Goals:

    1.	Deploy to AWS
    2.	Integrate API: Paypal for payment, Dropbox to save Wishlist
    3.	Many to Many relationship: Include multiple items with similar keywords or ratings
    4.	Add JWT registration an login of users

