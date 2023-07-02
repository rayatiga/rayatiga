Documentation 1 - Active Page.
Effective used page, displayed in the navigation bar.
List of effective used page:
- Home                  : Path /
- About                 : Path /about/
- Career                : Path /career/
- Contact               : Path /contact/
- Project               : Path /project/
- Web Hosting           : Path /hosting/
- About Web Hosting     : Path /hosting/about/
- Contact Web Hosting   : Path /hosting/contact/
- Pricing Web Hosting   : Path /hosting/pricing/

Documentation 2 - No Active Page.
Page no active, no displayed in the navigation bar.
- Founder   : Path /founder/
- Payment   : Path /payment/
- Checkout  : Path /hosting/checkout/

Documentation 3 - 404 Not Found Page.
Page return for not founded a resources in web.
- 404.html  : Path /404.html

Documentation 4 - Template Resources.
Template HTML for head, navigation, and footer.
- Head          : Path /asset/template/head.html
- Navigation    : Path /asset/template/navigation.html
- Footer        : Path /asset/template/footer.html

Documentation 5 - Visual Debugging.
Debug layout with all selector css.
- Code  :
* {
    outline: 1px solid #000000;
    background: #ff00001a;
}

Documentation 6 - Code Change.
Code change from original source, intended for localization purposes.
- Change 1  : Bootstrap to Root.
- Change 2  : Any code start, end, or both with *bs* change to *root*.
- Change 3  : Any code start, end, or both with *bootstrap* change to *root*.

Documentation 7 - Comment.
Comment with code "Modified" following by integer e.g. "(1)" and status e.g. "Disable" inside square brackets for e.g. "[Modified (1) Disable]" indicate the modified line.
List of "[Modified (<int>) <status>]" information:
- <int>     : Numbering or identifier category of modified.
- <status>  : Describe status as disable, change, or addition.
- Disable   : Commenting the line and not be used.
- Change    : Commenting above line and changed line at the bottom.
- Addition  : Commenting between additional line [Addition Start and Addition End].

Documentation 8 - FormSpree.
FormSpree API URL in form action attribute.
- Form URL  : https://formspree.io/f/xknavynp

Documentation 9 - Backup at File and Line.
Create a backup snippet and stored from specified line.
- Backup 1  : Path /career/index.html => <form id="applyPositionForm" action="" method=""> => <form id="applyPositionForm" action="https://formspree.io/f/xknavynp" method="post">
- Backup 2  : Path /career/index.html =>  => <button type="" form="" class="btn btn-dark disabled">Application Closed</button> => <button type="submit" form="applyPositionForm" class="btn btn-dark">Apply Now</button>

Documentation 10 - Ignore File.
Ignoring file for uploading to public zone.
- Ignore 1  : /documentation/
- Ignore 2  : /README.md
- Ignore 3  : /LICENSE
