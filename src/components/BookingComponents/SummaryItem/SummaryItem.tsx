

export default function SummaryItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-[#f6c015]">{icon}</span>
            <span className="font-medium">{label}:</span>
            <span className="ml-auto capitalize">{value?.length > 30 ? value.slice(0, 30) + "..." : value}</span>
        </div>
    );
}