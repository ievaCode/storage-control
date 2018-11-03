import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Items from './components/Items';
import AddItems from './components/AddItems';
import Categories from './components/Categories';
import Statistics from './components/Statistics';


class App extends React.Component {
    state = {
        tabs: ['Items', 'Manage items', 'Manage categories', 'Statistics'],
        activeTab: 'Items',
        categories: ['laptops', 'tablets', 'desktopPCs', 'monitors'],
        activeCat: 'laptops',
        newCat: '',
        articles: {
            laptops: [
                {
                    model: 'APPLE MacBook 12" - Rose Gold (2017)',
                    price: 200,
                    units: 10
                },
                {
                    model: '13.3" Acer Aspire S13, Full HD, Core i5-7Y54, 8GB RAM, 256GB SSD, ac WiFi + BT 4.0, 2x USB Type C, Win 10, Gold/Black',
                    price: 300,
                    units: 20
                },
                {
                    model: '11.6" ASUS VivoBook E12 E203NA-FD026TS, Grey, HD, Celeron N3350, 2GB DDR3, 32GB eMMC, Intel HD Graphics 500, Win10',
                    price: 400,
                    units: 42
                }
            ],
            tablets: [
                {
                    model: '7" Prestigio Multipad Grace 3157 3G, Quad Core 1.3GHz, 1GB RAM, 8GB Storage, 720x1280, IPS, 3G, Dual SIM, Android 7.0',
                    price: 250,
                    units: 11
                },
                {
                    model: '10.1" Terra Pad 1004, IPS Panel, Quad Core 1.3GHz ARM A7 CPU, 1GB RAM, 16GB Storage, LTE, Mini Sim, Android 5.1, Black',
                    price: 350,
                    units: 101
                },
                {
                    model: 'Apple iPad 2017, Wi-Fi, IPS (2048x1536), 128 GB Storage, 2GB RAM, ac WiFi + BT 4.2, 8MP/1.2MP Cameras',
                    price: 450,
                    units: 6
                }
            ],
            desktopPCs: [
                {
                    model: 'Intel NUC 7 Enthusiast NUC7I7BNKQ, Mini PC, i7 7567U, 16GB DDR4, 512GB M.2 PCIe NVMe SSD, Iris Plus Graphics 650, Win10',
                    price: 280,
                    units: 18
                },
                {
                    model: 'Scan Office O5i, Intel Core i3 8100 "Coffee Lake", 8GB DDR4, 240GB SSD, 1TB, Win 10 Pro',
                    price: 380,
                    units: 35
                },
                {
                    model: 'Scan Home H11i, Intel Core i3 8100 "Coffee Lake", 8GB DDR4, 120GB SSD, 1TB, Win 10',
                    price: 480,
                    units: 18
                },
            ],
            monitors: [
                {
                    model: '19" iiyama ProLite B1980SD-W1 Monitor 1280x1024, 5ms, 250cd/m² Brightness, D-Sub/DVI-D, White',
                    price: 220,
                    units: 0
                },
                {
                    model: '21.5" ASUS VS229NA Monitor, VA Panel, 1920x1080, 5ms, 80M:1, 250cd/m² Brightness, DVI-D/D-Sub (VGA), Black',
                    price: 320,
                    units: 2
                },
                {
                    model: '21.5" Dell P2217H Monitor, IPS Panel, 1920x1080, 6ms, 1000:1, 250cd/m² Brightness, D-Sub (VGA)/DisplayPort 1.2/HDMI 1.4',
                    price: 420,
                    units: 55
                }
            ]
        }

    };


    switchTab = (activeTab) => {
        this.setState({activeTab})
    };

    switchCat = activeCat => this.setState({activeCat});

    removeCat = (index) => {
        const categories = this.state.categories.filter((cat, i) => i !== index);
        // console.log (categories);
        let deleted = this.state.categories.filter((cat, i) => i === index);
        // console.log (deleted);
        const copy = {...this.state.articles};
        delete copy[deleted[0]];
        this.setState({articles: copy});
        this.setState({categories});
    };

    getNewCat = (updatedValue) => {
        this.setState({newCat: updatedValue})
    };

    addNewCat = () => {
        let articles = this.state.articles;
        articles[this.state.newCat] = [];
        this.setState({articles});
        const categories = [...this.state.categories, this.state.newCat];
        this.setState({categories});
        let newCat = '';
        this.setState({newCat});
    };

    addItem = (category, model, price, units) => {
        let newItem = {model, price, units};
        // let ar = [...this.state.articles[category], newItem];
        let articles = this.state.articles;
        articles[category] = [...this.state.articles[category], newItem];
        this.setState({articles});

    };

    render() {

        const renderContent = () => {
            switch (this.state.activeTab) {
                case this.state.tabs[0] :
                    return (
                        <Items
                            articles={this.state.articles[this.state.activeCat]}
                            // items={this.state.items}
                            activeCat={this.state.activeCat}
                            categories={this.state.categories}
                            switchCat={this.switchCat}/>
                    );
                case this.state.tabs[1] :
                    return (
                        <AddItems
                            categories={this.state.categories}
                            addItem={this.addItem}/>
                    );
                case this.state.tabs[2] :
                    return (
                        <Categories
                            categories={this.state.categories}
                            removeCat={this.removeCat}
                            addCat={this.addCat}
                            newCat={this.state.newCat}
                            getNewCat={this.getNewCat}
                            addNewCat={this.addNewCat}/>
                    );
                case this.state.tabs[3] :
                    return (
                        <Statistics/>
                    );
                default:
                    return null
            }
        };


        return (
            <div className="container">
                <Header
                    tabs={this.state.tabs}
                    activeTab={this.state.activeTab}
                    switchTab={this.switchTab}/>
                {renderContent()}
                <Sidebar
                    categories={this.state.categories}
                    activeCat={this.state.activeCat}
                    switchCat={this.switchCat}
                    activeTab={this.state.activeTab}/>
            </div>

        )
    }
}


export default App

//
// items: [
//     {
//         cat: 'laptops',
//         model: 'APPLE MacBook 12" - Rose Gold (2017)',
//         price: 200
//     },
//     {
//         cat: 'laptops',
//         model: '13.3" Acer Aspire S13, Full HD, Core i5-7Y54, 8GB RAM, 256GB SSD, ac WiFi + BT 4.0, 2x USB Type C, Win 10, Gold/Black',
//         price: 300
//     },
//     {
//         cat: 'laptops',
//         model: '11.6" ASUS VivoBook E12 E203NA-FD026TS, Grey, HD, Celeron N3350, 2GB DDR3, 32GB eMMC, Intel HD Graphics 500, Win10',
//         price: 400
//     },
//     {
//         cat: 'tablets',
//         model: '7" Prestigio Multipad Grace 3157 3G, Quad Core 1.3GHz, 1GB RAM, 8GB Storage, 720x1280, IPS, 3G, Dual SIM, Android 7.0',
//         price: 250
//     },
//     {
//         cat: 'tablets',
//         model: '10.1" Terra Pad 1004, IPS Panel, Quad Core 1.3GHz ARM A7 CPU, 1GB RAM, 16GB Storage, LTE, Mini Sim, Android 5.1, Black',
//         price: 350
//     },
//     {
//         cat: 'tablets',
//         model: 'Apple iPad 2017, Wi-Fi, IPS (2048x1536), 128 GB Storage, 2GB RAM, ac WiFi + BT 4.2, 8MP/1.2MP Cameras',
//         price: 450
//     },
//
//     {
//         cat: 'desktop PCs',
//         model: 'Intel NUC 7 Enthusiast NUC7I7BNKQ, Mini PC, i7 7567U, 16GB DDR4, 512GB M.2 PCIe NVMe SSD, Iris Plus Graphics 650, Win10',
//         price: 280
//     },
//     {
//         cat: 'desktop PCs',
//         model: 'Scan Office O5i, Intel Core i3 8100 "Coffee Lake", 8GB DDR4, 240GB SSD, 1TB, Win 10 Pro',
//         price: 380
//     },
//     {
//         cat: 'desktop PCs',
//         model: 'Scan Home H11i, Intel Core i3 8100 "Coffee Lake", 8GB DDR4, 120GB SSD, 1TB, Win 10',
//         price: 480
//     },
//
//     {
//         cat: 'monitors',
//         model: '19" iiyama ProLite B1980SD-W1 Monitor 1280x1024, 5ms, 250cd/m² Brightness, D-Sub/DVI-D, White',
//         price: 220
//     },
//     {
//         cat: 'monitors',
//         model: '21.5" ASUS VS229NA Monitor, VA Panel, 1920x1080, 5ms, 80M:1, 250cd/m² Brightness, DVI-D/D-Sub (VGA), Black',
//         price: 320
//     },
//     {
//         cat: 'monitors',
//         model: '21.5" Dell P2217H Monitor, IPS Panel, 1920x1080, 6ms, 1000:1, 250cd/m² Brightness, D-Sub (VGA)/DisplayPort 1.2/HDMI 1.4',
//         price: 420
//     }
// ]
//

