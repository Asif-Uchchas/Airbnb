import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import getReservations from '../actions/getReservations';
import ResevationsClient from './ResevationsClient';

const ReservationsPage = async () => {

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
        <ClientOnly>
            <EmptyState
                title='Unauthorized'
                subtitle='Please login'
            />
            </ClientOnly>
        )
    }
   
    const reservations = await getReservations({
        authorId: currentUser.id
    })

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title='No reservations fond'
                    subtitle='Looks like you have no reservations on your property'
                />
            </ClientOnly>
            )
    }

    return (
        <ClientOnly>
            <ResevationsClient
                reservations = { reservations }
                currentUser = { currentUser }
            />
        </ClientOnly>
        )
}

export default ReservationsPage;
