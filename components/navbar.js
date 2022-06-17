function navbar()
{
    return `
    <div id="navbar_complete">
    <div id="logo_section">
    <img id="navbar_logo" src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/d-logo-new.svg" alt="deccan-hearld logo"/>
    <p id="date"></p>
    <div id="social_media">
        <img id="facebook_logo" src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/fb-nav.svg" alt="facebook-link"/>
        <img id="twitter_logo" src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/twitter-nav.svg" alt="twitter link"/>
        <img id="instagram_logo" src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/ig-nav.svg" alt="instagram link"/>
    </div>
</div>

<div id="navbar">
    <ul>
        <li class="active"><a href="#"> Home</a></li>
        <li><a href="#">Bengaluru</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Top Stories</a></li>
                    <li><a href="#">Crime</a></li>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Infrastructure</a></li>
                    <li><a href="#">Life in the City</a></li>
                    <li><a href="#">Bangalore 2040</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Karnataka</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Top Stories</a></li>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Districts</a></li>
                    <li><a href="#">22 in 22</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">National</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Coronavirus</a></li>
                    <li><a href="#">North and Central</a></li>
                    <li><a href="#">East and Northeast</a></li>
                    <li><a href="#">South</a></li>
                    <li><a href="#">West</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Sports</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Cricket</a></li>
                    <li><a href="#">Formula1</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Sportscene</a></li>
                    <li><a href="#">Other Sports</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Business</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Business News</a></li>
                    <li><a href="#">Family Finanace</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">DH Wheels</a></li>
                    <li><a href="#">Budget 2022</a></li>
                </ul>
            </div>     
        </li>
        <li><a href="#">Opinion</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">DH Views</a></li>
                    <li><a href="#">Editorials</a></li>
                    <li><a href="#">Panorama</a></li>
                    <li><a href="#">Comment</a></li>
                    <li><a href="#">In Perspective</a></li>
                    <li><a href="#">Right in the Middle</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Features</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Metrolife</a></li>
                    <li><a href="#">Entertainment</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Spectrum</a></li>
                    <li><a href="#">Sunday Herald</a></li>
                    <li><a href="#">Living</a></li>
                    <li><a href="#">DH Education</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Videos</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Latest Videos</a></li>
                    <li><a href="#">Bengaluru</a></li>
                    <li><a href="#">Karnataka</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Popular</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Brandsport</a></li>
        <li><a href="#">Newsletters</a></li>
    </ul>
</div> 
</div> 
    `
}

export default navbar;