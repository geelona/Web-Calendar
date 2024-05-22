import "./CompanyLogo.scss";

export default function CompanyLogo(props: { height: number; Unit: string }) {
    return (
        <div
            className="company-logo"
            style={{ height: props.height + props.Unit }}
        >
            <img src="./components/CompanyLogo/logo.png" />
            <h1 style={{ fontSize: props.height / 2 + props.Unit }}>
                WebCalendar
            </h1>
        </div>
    );
}
