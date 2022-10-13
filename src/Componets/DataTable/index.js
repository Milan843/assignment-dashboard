import React from 'react'

import facebook from '../../Assets/facebook.png'
import gmail from '../../Assets/gmail.png'
import reddit from '../../Assets/reddit.png'
import twitter from '../../Assets/twitter.png'
import sony from '../../Assets/sony.png'

import './_dataTable.scss'

function DataTable() {
    const data = [{
        campaignName: 'Sony Kenya Campaign',
        campaignby: 'Sony',
        totalPosts: 34,
        thisWeek: 4,
        totalInfluencers: 17,
        daysLeft: 11,
        endDate: 'Feb 22 2022',
        status: 'Complete'
    },
    {
        campaignName: 'Sony Kenya Campaign',
        campaignby: 'Sony',
        totalPosts: 14,
        thisWeek: 3,
        totalInfluencers: 17,
        daysLeft: 109,
        endDate: 'Feb 22 2022',
        status: 'Running'

    },
    {
        campaignName: 'Sony Kenya Campaign',
        campaignby: 'Sony',
        totalPosts: 34,
        thisWeek: 4,
        totalInfluencers: 17,
        daysLeft: 11,
        endDate: 'Feb 22 2022',
        status: 'Complete'

    },
    {
        campaignName: 'Sony Kenya Campaign',
        campaignby: 'Sony',
        totalPosts: '-',
        thisWeek: '-',
        totalInfluencers: 3,
        daysLeft: 34,
        endDate: 'Feb 22 2022',
        status: 'Draft'
    }]

    const RenderColumnCard = ({ value }) => {
        function getStatusColor() {
            switch (value.status) {
                case 'Complete':
                    return 'blue'
                case 'Running':
                    return 'green'
                case 'Draft':
                    return 'yellow'
                default:
                    break;
            }
        }

        return <div className='dataTable__card'>
            <div className='dataTable__card-element'>

                <img src={sony} alt='sony-logo' />
            </div>
            <div className='dataTable__card-elementCampaign'>
                <div className='dataTable__card-bold'>

                    {value.campaignName}
                </div>
                <div className='dataTable__card-light'>
                    by {value.campaignby}
                </div>
            </div>
            <div className='dataTable__card__icons'>
                <img src={facebook} alt='facebook-logo' />
                <img src={gmail} alt='gmail-logo' />
                <img src={reddit} alt='reddit-logo' />
                <img src={twitter} alt='twitter-logo' />

            </div>

            <div className='dataTable__card-element'>
                {value.totalPosts}
            </div>
            <div className='dataTable__card-element'>
                {value.thisWeek}
            </div>
            <div className='dataTable__card-elementInfluencers'>
                {value.totalInfluencers}
            </div>
            <div className='dataTable__card-elementDays'>
                <div className='dataTable__card-bold'>
                    {value.daysLeft} Days
                </div>
                <div className='dataTable__card-date'>
                    Ends  {value.endDate}
                </div>
            </div>
            <div className='dataTable__card__status'>
                <div className='dataTable__card__circle' style={{ backgroundColor: getStatusColor() }}>
                </div>
                <div> {value.status}</div>
            </div>
            <button className='dataTable__card__button'>View</button>
        </div>
    }
    return (
        <div className='dataTable'>
            <div className='dataTable__title'>

                Recently Viewed Campaigns
            </div>
            <div className="dataTable__content">
                <div className='dataTable__columns'>
                    <span className='dataTable__columns--campaign'>Campaign</span>
                    <span className='dataTable__columns--totalPosts'>Total Posts</span>
                    <span className='dataTable__columns--thisWeek'>This Week</span>

                    <span className='dataTable__columns--influencers'>Total Influencers</span>
                    <span className='dataTable__columns--daysLeft'>Days Left</span>
                    <span className='dataTable__columns--status'>Status</span>

                </div>
                {data.map((value, index) => <RenderColumnCard key={`column-${index}`} value={value} />)}

            </div>
        </div>
    )
}

export default DataTable