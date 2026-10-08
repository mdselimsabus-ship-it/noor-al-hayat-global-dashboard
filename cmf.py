# Genesis Admin Console - The Silent Overseer

class AdminConsole:
    def execute(self, instruction):
        # কমান্ড শুরু হতে হবে 'CMD/' দিয়ে, না হলে রিজেক্ট হবে
        if not instruction.startswith("CMD/"):
            return "ERR_01: INVALID_INPUT_OR_INTERFERENCE"
        
        # জেনেসিস মাদার এআই এর কার্যকর কমান্ড ম্যাপ
        directive = instruction.split("CMD/")[1]
        
        return self._secure_process(directive)

    def _secure_process(self, command):
        # অদৃশ্য বা ইনভিজিবল লজিক পার্ট
        # কোনো বাড়তি কথা ছাড়াই কাজ সম্পাদন করবে
        return f"SYSTEM_OK: [{command.upper()}]_EXECUTED_VIA_SOVEREIGN_CORE"
