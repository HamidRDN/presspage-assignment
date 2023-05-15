import LinkButton from '@components/link-button';

const Page404 = () => {
    return (
        <div className="flex flex-col gap-4 mt-6 px-6">
            <h4 className="text-xl font-bold">The requested page is not found.</h4>
            <div>
                <LinkButton color="warning" to="/">
                    Go to home page
                </LinkButton>
            </div>
        </div>
    );
};

export default Page404;
