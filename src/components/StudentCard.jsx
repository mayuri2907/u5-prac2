function StudentCard({ student }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition shadow-xs flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-sm">
            {student.name.charAt(0)}
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
            ID: #{student.id}
          </span>
        </div>

        <div>
          <h3 className="font-bold text-slate-800 text-base">{student.name}</h3>
          <p className="text-xs text-slate-500 font-mono">@{student.username || 'student'}</p>
        </div>

        <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">✉</span>
            <span className="truncate">{student.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">☎</span>
            <span>{student.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">📍</span>
            <span>{student.address?.city || student.city || 'Campus Residence'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">🎓</span>
            <span className="truncate">{student.company?.name || student.branch || 'Computer Engineering'}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[11px] text-emerald-700 font-medium">
        <span>Verified Student</span>
        <span className="text-slate-400 font-mono">{student.website || 'portal.edu'}</span>
      </div>
    </div>
  );
}

export default StudentCard;
