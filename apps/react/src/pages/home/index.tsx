import LinkButton from '@components/link-button';

const PageHome = () => {
    return (
        <div className="flex flex-col gap-4 mt-6 px-6">
            <h4 className="text-xl font-bold">Welcome to PP co. Dashboard</h4>
            <h5 className="text-lg">For accessing a list of the users, please click on the below button.</h5>
            <div>
                <LinkButton to="/users">View Users</LinkButton>
            </div>
        </div>
    );
};

export default PageHome;
